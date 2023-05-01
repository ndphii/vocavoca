import React from 'react';
import ListVocaToeic from '../../components/list_voca_toiec'

class ViewListVocaToeic extends React.Component {
    state = {
        vocabulary: "",
        viet_sub: "",
        link_img: "",

    }
    handleShowDetailedVoca = (vocabulary, viet_sub, link_img) => {
        this.setState({ vocabulary, viet_sub, link_img })
    }
    render() {
        return (
            <div >
                < ListVocaToeic handleShowDetailedVoca={this.handleShowDetailedVoca} />
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
            </div >
        );
    }
}

export default ViewListVocaToeic;
