import React from 'react';
import "../../styles/list_toeic.css"
class List_toiec extends React.Component {

    handleClickKeyWord = (vocabulary, viet_sub, link_img) => {
        //console.log(vocabulary + "-" + viet_sub);
        this.props.handleShowImg({ text_keyword: vocabulary, viet_sub: viet_sub, link_img: link_img });
    }

    render() {
        // let { List_keyword } = this.List_keyword;
        let { List_keyword } = this.props;
        return (
            <>
                <div className="container ">
                    {
                        List_keyword.map((item, index) => {
                            return (
                                <div className=" d-lg-flex text-center mt-3 button-list" key={item.id}>
                                    <div className="col-4 ">
                                        <div className="d-flex justify-content-center ">
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModalToggle" type="button" onClick={() => this.handleClickKeyWord(item.vocabulary, item.viet_sub, item.link_img)} className="btn-img fw-bold pt-0 pb-0 ">
                                                <p id={item.id} value={item.vocabulary}>{item.vocabulary}</p>
                                            </button>
                                            <p className="ms-3">{item.word_type}</p>
                                        </div>
                                    </div>
                                    <div className="col-4 ">
                                        <p className="d-flex justify-content-center " id="InterPhonetic">{item.InterPhonetic}
                                            <a target="_blank" rel="noreferrer" title="Nghe phát âm tại google"
                                                href={`https://www.google.com/search?q=how+to+pronounce+${item.vocabulary}`}
                                                className="ms-3 text-secondary
                            fw-bold"
                                                id="exceptional"><i className="material-icons">volume_up</i></a>
                                        </p>
                                    </div>
                                    <div className="col-4 ">
                                        <p className="viet-sub" id={item.id} value={item.viet_sub}>{item.viet_sub}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


            </>
        );
    }


}





export default List_toiec;