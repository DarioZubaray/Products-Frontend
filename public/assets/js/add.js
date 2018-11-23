$("#agregarProducto").submit(()=>{
  console.log("agregarProducto");
  event.preventDefault();

  let url = "https://dariozubaray-products-backend.herokuapp.com/api/product/create";

  let data = {
    "name": $("#productName").val(),
    "price": $("#price").val(),
  	"brand": $("#brand").val(),
  	"categoryId": $("#categoryId").val()
  };
      
  $.ajax({
    url: url,
    type: 'post',
    data: JSON.stringify(data),
    headers: {
        "Access-Control-Allow-Origin": '*',
        "Content-Type": 'application/json'
    },

    dataType: 'json',
    success: function (data) {
        console.info(data);
      }
    });

  $("#agregarProducto").trigger("reset");
});
