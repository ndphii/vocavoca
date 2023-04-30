import React from "react";
import List_toiec from "./list_toiec.js";
import "../../styles/home.css"
import ReduxToeic from "../../redux/Redux_toeic.js";
class Home extends React.Component {

    state = {
        test: [ReduxToeic()],
        vocabulary: "",
        viet_sub: "",
        link_img: "",
        List_keyword: [
            { id: "01", vocabulary: "exceptional", word_type: "(adj)", InterPhonetic: "/ɪkˈsepʃənl/", viet_sub: "Khác thường, đặc biệt, ngoại lệ", link_img: "https://blog.dktcdn.net/files/ban-hang-online-khac-biet.jpg" },
            { id: "02", vocabulary: "marginal", word_type: "(adj)", InterPhonetic: "/ˈmɑːrdʒɪnl/", viet_sub: "Cận biên (kinh tế), ở lề", link_img: "https://d1vtbil09mxkdf.cloudfront.net/Business%20economics%20graphs/Profit-max2.webp" },
            { id: "03", vocabulary: "conservative", word_type: "(adj)", InterPhonetic: "/kənˈsɜːrvətɪv/", viet_sub: "Bảo thủ, dè dặt, thận trọng", link_img: "https://thosuaxe.vn/wp-content/uploads/2023/01/tinh-bao-thu-la-gi.jpg" },
            { id: "04", vocabulary: "calculation", word_type: "(n)", InterPhonetic: "/ˌkælkjuˈleɪʃn/", viet_sub: "Sự tính toán, cân nhắc", link_img: "https://accnet.vn/wp-content/uploads/2022/11/tinh-gia-thanh-san-pham-7.png" },

        ]
    }

    handleShowImg = (data) => {
        const x = Object.values(data);
        const voca = x[0];
        const vietsub = x[1];
        const linkimg = x[2];
        //console.log(voca + "---" + vietsub + "---" + linkimg)
        this.setState({ vocabulary: voca, viet_sub: vietsub, link_img: linkimg })
        //console.log(this.state.vocabulary + "---" + this.state.viet_sub + "---" + this.state.link_img)
    }
    render() {

        return (
            <>
                <List_toiec handleShowImg={this.handleShowImg} List_keyword={this.state.List_keyword} />

                <div className="modal fade" id="exampleModalToggle" aria-hidden="false" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="d-flex modal-title justify-content-around ">
                                    <span className="fw-bold " id="vocabulary">{this.state.vocabulary}</span>
                                    <span className="ps-3 viet-sub" id="viet_sub">{this.state.viet_sub}</span>
                                </p>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img src={this.state.link_img} className="card-img-top " alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Home;

