import request from "@/utils/request";

const baseUrl = "/system/role";

/**
 *
 * @param query 查询条件
 * @param current  当前页码
 * @param size 每页显示多少条数据
 * @returns
 */
export function getPageList(query:SysRoleQuery, current = 1, size = 20) {
  return request({
    url: `${baseUrl}/search`,
    method: "POST",
    data: { ...query, current, size },
  });
}
