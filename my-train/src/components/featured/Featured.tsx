import "./featured.css"

const Featured: React.FC = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://ik.imagekit.io/tvlk/blog/2018/01/kinh-nghiem-du-lich-ha-noi-tu-a-den-z-2.jpg?tr=dpr-2,w-675" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Ha Noi</h1>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://www.quangbinhtravel.vn/wp-content/uploads/2013/05/ca-chep-rong.jpg" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Da Nang</h1>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://www.new7wonders.com/app/uploads/sites/5/2016/10/ho-chi-minh-city-1348092-1920x1280.jpg" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Ho Chi Minh</h1>
                </div>
            </div>

            <div className="featuredItem">
                <img src="" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Can Thơ</h1>
                </div>
            </div>
        </div>
    )
}

export default Featured