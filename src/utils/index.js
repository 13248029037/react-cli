
export default { // 工具集
    formatDate (date) { // 标准化时间格式
        if (date === null) return '';
        date = new Date(date);
        function fillZero (num) {
            num = +num;
            return num <= 9 ? '0' + num : '' + num;
        }
        let [Y, M ,D] = [
            date.getFullYear(),
            fillZero(date.getMonth() + 1),
            fillZero(date.getDate())
        ];

        let [h, m ,s] = [
            fillZero(date.getHours()),
            fillZero(date.getMinutes()),
            fillZero(date.getSeconds())
        ];
        return `${Y}-${M}-${D} ${h}:${m}:${s}`;
    },
    date2Str (dt) {
        dt = new Date(dt);
        let [month, date, day] = [dt.getMonth() + 1, dt.getDate(), dt.getDay()];
        return `${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}/星期${'日一二三四五六'[day]}`;
    }
};