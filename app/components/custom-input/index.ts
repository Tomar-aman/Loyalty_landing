import SelectInputComponent from "./selectInput";
import RadioInputComponent from "./radioInput";
import RadioInputSelect from "./radioInputSelect";
import SwitchComponent from "./switch";
import DateInputComponent from "./dateInput";
import LabeledInputComponent from "./labeledInput";
import CheckboxInputComponent from "./checkboxInput";
export type SelectOptions = {
  value: string;
  label: string;
};
export type RadioOptions = {
  value: string;
  label: string;
};

export const LabeledInput = LabeledInputComponent;
export const CheckBoxInput = CheckboxInputComponent;
export const SelectInput = SelectInputComponent;
export const RadioInput = RadioInputComponent; 
export const RadioInput2 = RadioInputSelect;
export const SwitchInput = SwitchComponent;
export const DateInput = DateInputComponent;
