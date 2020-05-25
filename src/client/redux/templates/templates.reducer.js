export const initialState = {
  templates: [],
  isAddingField: false,
  editingField: null,
  editingTemplate: null,
  editingTemplateFields: null,
  isEditingTemplate: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TEMPLATES/SET_TEMPLATES': {
      return {
        ...state,
        templates: action.payload.templates,
      };
    }
    case 'TEMPLATES/SET_IS_ADDING_FIELD': {
      return {
        ...state,
        isAddingField: action.payload.isAddingField,
      };
    }
    case 'TEMPLATES/SET_EDITING_FIELD': {
      return {
        ...state,
        editingField: action.payload.editingField,
      };
    }
    case 'TEMPLATES/SET_EDITING_TEMPLATE': {
      return {
        ...state,
        editingTemplate: action.payload.editingTemplate,
      };
    }
    case 'TEMPLATES/SET_EDITING_TEMPLATE_FIELDS': {
      return {
        ...state,
        editingTemplateFields: action.payload.editingTemplateFields,
      };
    }
    case 'TEMPLATES/SET_IS_EDITING_TEMPLATE': {
      return {
        ...state,
        isEditingTemplate: action.payload.isEditingTemplate,
      };
    }
    default: {
      return { ...state };
    }
  }
};
