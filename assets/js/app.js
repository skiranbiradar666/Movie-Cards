const cl = console.log;


const setRating = (rating)=>{
	if(rating >= 7){
		return "badge-success"
	}
	else if(rating >= 5 && rating < 7){
		return "badge-warning"
	}else{
		return "badge-danger"
	}
}

let result = "";
movieArray.forEach(movie =>{
	
	result += `<div class="col-md-4 mb-4">
					<div class="cards">
						<figure class="movieCard mb-0">
							<img src=${movie.poster}>
							
							<figcaption>
								<div class="titleInfo">
									<div class="row">
										<div class="col-10">
											<h2>${movie.title}</h2>
										</div>
										<div class="col-2">
											<h3><span class="badge badge ${setRating(movie.rating)}">${movie.rating}</span></h3>
										</div>
									</div>
									
								</div>
								<div class="overview">
									<h5>${movie.title}</h5>
									<p>"${movie.overview}"</p>
								</div>
							</figcaption>
						</figure>
					</div>
				</div>`
})
movieContainer.innerHTML = result;
		