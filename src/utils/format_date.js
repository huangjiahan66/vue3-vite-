//时间处理函数
import dayjs from "dayjs";

// 格式化
export function formatMonthDay(date) {
  return dayjs(date).format("MM月DD日");
}

// 时间差
export function getDiffDatys(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day");
}
