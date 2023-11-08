import request from "@/utils/request";

const baseUrl ='/system/menu'


/**
 * 查询系统菜单列表
 * @param query  查询条件 SysMenuQuery
 * @returns 
 */
export function getList(query:SysMenuQuery) {
  return request({
    url: `${baseUrl}/search`,
    method: "POST",
    data: query,
  });
}

/**
 * 删除菜单
 * @param id 
 * @returns 
 */
export function deleteById(id:string){
  return request({
    url:`${baseUrl}/${id}`,
    method: "DELETE",
  })
}