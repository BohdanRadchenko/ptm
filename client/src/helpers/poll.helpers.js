(() => {
  const interval = 2000;
  const poll = () => {
    setTimeout(function(){
      $.ajax({
        url: 'https://api.example.com/endpoint',
        success: function(data) {

          if (!data) {
            // Рекурсивно выполняем следующий запрос
            poll();
          }
          // Делаем что-то с `data`

        },
        dataType: 'json'
      });
    }, interval);
  }
})();