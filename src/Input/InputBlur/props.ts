import { IBaseProps } from '../../_util/base';
/**
 * @description 输入框。
 */

export interface InputBlurProps extends IBaseProps {
  value: string;
  defaultValue: string;
  placeholder: string;
  placeholderClassName: string;
  placeholderStyle: string;
  enableNative: boolean;
  confirmType: string;
  confirmHold: string;
  alwaysSystem: boolean;
  selectionStart: number;
  selectionEnd: number;
  cursor: number;
  controlled: boolean;
  maxLength: number;
  inputClassName: string;
  inputStyle: string;
  password: boolean;
  onChange: (value: string, e: any) => void;
  onBlur: (value: string, e: any) => void;
  onFocus: (value: string, e: any) => void;
  onConfirm: (value: string, e: any) => void;
}

export const InputBlurDefaultProps: Partial<InputBlurProps> = {
};
