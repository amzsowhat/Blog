export function formatDate(date: Date){
    return new Intl.DateTimeFormat("zh-CN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Shanghai",
      }).format(date)
}
