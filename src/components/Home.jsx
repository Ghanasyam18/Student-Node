import React from 'react'
import NavBar from './NavBar'

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://i.ytimg.com/vi/ThgmWpXkKMI/sddefault.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a364ee04-6380-4393-a551-2199250f57bf/dbtspza-04318586-4f6e-4363-b1b9-b9f285b1d475.jpg/v1/fill/w_1024,h_626,q_75,strp/the_avengers___wallpaper_by_daviddv1202_dbtspza-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI2IiwicGF0aCI6IlwvZlwvYTM2NGVlMDQtNjM4MC00MzkzLWE1NTEtMjE5OTI1MGY1N2JmXC9kYnRzcHphLTA0MzE4NTg2LTRmNmUtNDM2My1iMWI5LWI5ZjI4NWIxZDQ3NS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.D1AUjxXBzPIp_-Wq458tK5qIbcHjfuIW0C7sBpyYNx4" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home