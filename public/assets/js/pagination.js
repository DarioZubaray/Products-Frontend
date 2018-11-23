let page = 0;
const url = {
  'heroku': 'https://dariozubaray-products-backend.herokuapp.com',
  'findAll': '/api/product/findAll',
}

$("#paginationFirst").click(function(){
  console.log("Go to first page");
  console.log(_products);
  page = 0;
  getPage(page);
});

$("#paginationPrevious").click(()=>{
  console.log("Go to previous page");
  if(page > 1) {
    page -= 1;
  }
  getPage(page);
});

$("#paginationNext").click(function(){
  console.log("Go to next page");
  page += 1;
  getPage(page);
});

$("#paginationLast").click(function(){
  console.log("Go to last page");
  page = _products.totalPages;
  getPage(page);
});

function getPage(page){
  $.ajax({
    url: `${url.heroku}${url.findAll}?page=${page}`,
    type: 'get',
    success: function (data) {
        console.info(data);
        $('#productsTable').html(data.content);
      }
    }).fail(function() {
      alert( "error" );
  });
}
