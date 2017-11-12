import {ArrayUtil} from "./array.util";
/**
 * 工具类：对象
 */
export class ObjectUtil {
  constructor() {}

  /**
   * 是否对象
   * @param vaue 值
   */
  static isObject(value: any): boolean {
    return typeof value === 'object' && !ArrayUtil.isArray(value);
  }
}
