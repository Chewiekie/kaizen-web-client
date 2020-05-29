import Request from './Request';
import { getStringFromDate } from '../utils/date';
import { getErrorType } from '../utils/error';
import { parseJwt } from '../utils/parseJwt';

class User extends Request {
  constructor(token) {
    super(token);
    this.baseUrl = `${this.apiUrl}/users`;
  }

  async listUsers(page, documentId, role) {
    let url = `${this.baseUrl}?page=${page}`;

    if (documentId) {
      url = `${url}&documentId=${documentId}`;
    }

    if (role) {
      url = `${url}&role=${role}`;
    }

    return this.axios.get(url)
      .then(({ data: { message } }) => {
        return {
          ...message,
          totalUsers: message.totalDocuments,
          users: message.users.map((user) => {
            return {
              ...user,
              id: user._id,
              creationDate: getStringFromDate(new Date(user.insertedAt)),
              updatedAt: getStringFromDate(new Date(user.updatedAt)),
              name: `${user.profile.firstName} ${user.profile.lastName}`,
              username: user.auth.username,
              country: user.profile.country,
              role: user.auth.role,
              document: user.profile.documentId,
            };
          }),
        };
      })
      .catch((error) => {
        throw getErrorType(error);
      });
  }

  async getUser(id) {
    return this.axios.get(`${this.baseUrl}/${id}`)
      .then(({ data: { message } }) => {
        const { tests, _id } = message;
        const { email, username } = message.auth;
        const {
          avatar,
          birthDate,
          country,
          documentId,
          firstName,
          gender,
          lastName,
          phoneNumber,
        } = message.profile;

        const statusLabels = {
          'DONE': 'Hecho',
          'PENDING': 'Por realizar',
        };

        return {
          email,
          username,
          tests: tests.map((test) => ({
            ...test,
            id: test.testId,
            name: test.testName,
            status: test.status.toLowerCase(),
            statusLabel: statusLabels[test.status],
          })),
          id: _id,
          avatar,
          birthDate,
          country,
          document: documentId,
          firstName,
          gender,
          lastName,
          phone: phoneNumber,
          name: `${firstName} ${lastName}`,
        };
      })
      .catch((error) => {
        throw error;
      });
  }

  async downloadTests(id, testIds) {
    return this.axios.post(`${this.baseUrl}/${id}/tests/results/document`, { testIds })
      .then(({ data: { message } }) => message)
      .catch((error) => {
        throw error;
      });
  }

  async login(data) {
    const url = `${this.apiUrl}/users/login`;
    return this.axios.post(url, data)
      .then(({ data }) => {
        return data.message;
      })
      .catch((error) => {
        throw getErrorType(error);
      });
  }

  async getUser() {
    const AuthStr = 'Bearer '.concat(document.cookie.substr(4));

    const { userId } = parseJwt(document.cookie);
    const url = `${this.apiUrl}/users/${userId}`;

    return this.axios.get(url, { headers: { Authorization: AuthStr } })
      .then(({ data }) => {
        return data.message;
      })
      .catch((error) => {
        throw getErrorType(error);
      });
  }

}

export default User;
