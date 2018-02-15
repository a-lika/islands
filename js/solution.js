(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на карте

        var number = 0;

        for (var i in map) {
            for (var j in map[i]){
                if (i==0){
                    if ((map[i][j]==1)&&(j==0)){
                        number +=1;
                    }
                    else if ((map[i][j]==1)&&(map[i][j-1]==0)){
                        number +=1;
                    }
                }
                else if((map[i][j]==1)&&(j==0)&&(map[i-1][j]==0))   {
                    number +=1;
                }
                else if((map[i][j]==1)&&(map[i][j-1]==0)&&(map[i-1][j]==0)){
                    number +=1;
                }
            }
        }

        return number;
    }



    root.SHRI_ISLANDS.solution = solution;
})(this);
