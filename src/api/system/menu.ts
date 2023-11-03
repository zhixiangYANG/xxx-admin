import request from "@/utils/request";

export function getList(query:SysMenuQuery) {
  return request({
    url: "/system/menu/search",
    method: "POST",
    data: query,
  });
}


