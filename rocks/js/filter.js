$(function () {
	var $container = $('.portfolio_list'),
		$loadMoreBtn = $('#loadmore'),
		addItemCount = 3, // 한번에 표시할 항목 수
		added = 0, //표시된 항목의 수
		allData = [];  // 모든 항목 저장	
		
		$.getJSON('./data/portfolio.json', initGallery);
		
		function initGallery(data){
			allData = data;
			additems();
			
			$loadMoreBtn.click(additems);
			//$loadMoreBtn.click(function(){ddd});		
		}//initGallery
		
		function additems(){
			var elements = [],
			slicedData = allData.slice(added, added + addItemCount);

			//<li class="gallery-item">A Day in the Life</li>
			$.each(slicedData, function(i,item){
                var itemHTML = 	
                			
                '<li style="background-image:url(' + item.imgUrl + ')" class="item ' + item.type + '">' +
                    '<h2 class="title_bar center">' + item.title + '</h2>' +
                    '<p>'+
                        item.desc +
                    '</p>' +
                    '<a href="' + item.projectLink + '" class="big btn orange">view project</a>'+
                '</li> ';
                		
				elements.push($(itemHTML).get(0));
				
			});//slicedData each
			
			$container.append(elements);		
	
			
			//added = added + slicedData.length;			
            added += slicedData.length;
            
            var porfolioContainer = $('.portfolio_list');

            var mixer = mixitup(porfolioContainer, {
              selectors: {
                  target: '.item'
              },
              animation: {
                  duration: 300
              }
            });
            mixer.forceRefresh();
			
		}//additems 
		

});
