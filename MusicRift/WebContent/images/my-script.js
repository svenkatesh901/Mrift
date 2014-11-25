
//Fecthing product data from json using ajax
function products_home_new(){
	var results = ""
	for(var obj in data){
		link="details.html?id="+data[obj].id
			results+=

					"<li style='text-align:center'>"+
					"				<a href="+link+"><img src='"+data[obj].image+"'  class='image-products'  alt='' /></a>"+
					"				<h4>"+data[obj].name+"</h4>"+
					"				<p>  Price: Rs. "+data[obj].price+"</p>"+
					"				<a href="+link+" class='btn btn-default'>More</a>			"+
					"</li>"
	}
	document.getElementById("new").innerHTML = results
}

function display_products(){
	var protype=document.getElementById("protype").value;
	var results =  "";
	for(var obj in data){
		if(data[obj].category==protype)
		{
			id=data[obj].id;
			link="details.html?id="+id
			results +=  "<div class='col-sm-4 list'>"+
						"	<div class='product-image-wrapper'>"+
						"		<div class='single-products'>"+
						"				<div class='productinfo text-center'>"+
						"					<a href="+link+"><img src='"+data[obj].image+"' alt='' /></a>"+
						"					<h2>Rs. "+data[obj].price+"</h2>"+
						"					<p>"+data[obj].name+"</p>"+
						"					<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
						"				</div>"+
						"				<div class='product-overlay'>"+
						"					<div class='overlay-content'>"+
						"						<p>"+data[obj].description+"</p>"+
						"						<h2>Rs. "+data[obj].price+"</h2>"+
						"						<p>"+data[obj].name+"</p>"+
						"						<a href='#' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</a>  <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
						"					</div>"+
						"				</div>"+
						"		</div>"+
						"		<div class='choose'>"+
						"			<ul class='nav nav-pills nav-justified'>"+
						"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
						"			</ul>"+
						"		</div>"+
						"	</div>"+
						"</div>"
				
							
		}
	}
	document.getElementById("results").innerHTML = results
}

 



