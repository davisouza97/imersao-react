import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label`
`;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const isTextArea = type === 'textarea';
  const hasSuggestion = Boolean(suggestions.length);
  const tag = isTextArea ? 'textarea' : 'input';
  const fieldId = `id_${name}`;

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={hasSuggestion ? 'off' : 'on'}
          list={hasSuggestion ? `suggestion_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>

        {hasSuggestion && (
          <datalist id={`suggestion_${fieldId}`}>
              {
                suggestions.map((sugestao) => (
                  <option value={sugestao} key={`suggestionFor_${fieldId}`}>
                    {sugestao}
                  </option>
                ))
              }
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
