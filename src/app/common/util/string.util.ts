/**
 * 工具类：字符串
 */
export class StringUtil {
  constructor() {}

  /**
   * 是否为空
   * @param vaue 值
   */
  static isEmpty(value: any): boolean {
    return value == null || (typeof value === 'string' && value.length === 0);
  }

  /**
   * 是否不为空
   * @param value 值
   */
  static isNotEmpty(value: any): boolean {
    return !StringUtil.isEmpty(value);
  }
}
