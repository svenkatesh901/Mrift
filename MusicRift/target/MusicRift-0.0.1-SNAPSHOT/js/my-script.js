
//Fecthing product data from json using ajax
function products_home_new(){
	alert("dfsdf");
	var results = ""
	count=0;
	loop=0;
	for(var obj in data){
		count++;
		
		alert(count +","+loop);

		link="details.html?id="+data[obj].id
			if(count==1 && loop==0)
			{
				results+="<div class='item active'>"
			}
			else if(count==1 && loop==1)
			{
				results+"<div class='item'>"
			}
			results+=
					
					"	<div class='col-sm-4 grid'>"+
					"		<div class='product-image-wrapper'>"+
					"			<div class='single-products'>"+
					"				<div class='productinfo text-center'>"+
					"					<img src="+data[obj].image+" alt='' />"+
					"					<h2>Price Rs. "+data[obj].price+"</h2>"+
					"					<p>"+data[obj].name+"</p>"+
					"					<a href="+link+" class='btn btn-default add-to-cart'>view</a>"+
					"				</div>"+			
					"			</div>"+
					"		</div>"+
					"	</div>"
					
			if(count==3)
			{
				results+="</div>"
				count=0;
			}
			if(count==1 && loop==0)
			{
				loop++;
			}
		
	}
	document.getElementById("new").innerHTML = results
}

function display_products(){
	var protype=document.getElementById("protype").value;
	var results =  "";
	i=0;
	for(var obj in data){
		if(data[obj].category==protype)
		{
			i++;
			id=data[obj].id;
			link="details.html?id="+id
			results +=  "<div class='col-sm-4 item1'><div class='grid check'>"+
						"	<div class='product-image-wrapper'>"+
						"		<div class='single-products'>"+
						"				<div class='productinfo text-center'>"+
						"					<a href="+link+"><img src='"+data[obj].image+"' class='image-products' alt='' id='image"+i+"'/></a>"+
						"					<h2>Rs. <span id='price"+i+"'>"+data[obj].price+"</span></h2>"+
						"						<p><div id='name"+i+"'>"+data[obj].name+"</div></p>"+
						"						<a class='btn btn-default add-to-cart' href='javascript:void(0)' onclick=toggle_visibility('popupBoxOnePosition');addtocart("+i+");><i class='fa fa-shopping-cart'></i>Add to cart</a>    <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
						"					</div>"+
						"				<div class='product-overlay'>"+
						"					<div class='overlay-content'>"+
						"						<h2>Rs. <span id='price"+i+"'>"+data[obj].price+"</span></h2>"+
						"						<p><div id='name"+i+"'>"+data[obj].name+"</div></p>"+
						"						<a class='btn btn-default add-to-cart' href='javascript:void(0)' onclick=toggle_visibility('popupBoxOnePosition');addtocart("+i+");><i class='fa fa-shopping-cart'></i>Add to cart</a>    <a href="+link+" class='btn btn-default add-to-cart'></i>Details</a>"+
						"					</div>"+
						"				</div>"+
						"		</div>"+
						"		<div class='choose'>"+
						"			<ul class='nav nav-pills nav-justified'>"+
						"				<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>"+
						"			</ul>"+
						"		</div>"+
						"	</div>"+
						"</div></div>"
			
				
							
		}
	}
	document.getElementById("results").innerHTML = results
}








