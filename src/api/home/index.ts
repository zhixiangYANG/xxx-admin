import request from "@/utils/request";

// 查询营业概况统计数据
export function getStatisticsData() {
  return request({
    method: "GET",
    url: "/home/statistics",
  });
}
