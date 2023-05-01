import React from 'react';
import ReduxToeic from '../redux/Redux_toeic';
import '../styles/list_toeic.css';
import { Link } from 'react-router-dom';
class ListToiec extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    async componentDidMount() {
        const result = await ReduxToeic();
        this.setState({ list: result });
    }

    render() {
        const objectList = this.state.list;
        const objectEntries = Object.entries(objectList); // lấy danh sách các entry trong objectList
        return (
            <div>
                {objectEntries.map(([key, value]) => { // sử dụng destructuring để truy cập key và value
                    if (key.startsWith("B") && key !== ("message")) { // chỉ hiển thị các entry có key bắt đầu bằng "B" có nghĩa là B1 B2 là các bài trong list toeic
                        return (
                            <>
                                <Link to={`/Toeic/${key}/${value.ID}`} >
                                    <div className="d-grid gap-2 container  mb-1 mt-1 ">
                                        <button key={value.ID} className="btn-bai-hoc" type="button" >
                                            <div className="card card-bai-hoc container mb-1 mt-1 " >
                                                <div className="row d-flex p-2 g-0">
                                                    <div className="col col-lg-4 ms-lg-5 me-lg-5 contain-IMG-baihoc">
                                                        <img src={value.IMG} className=" img-fluid border border-warning border-5 rounded-pill" alt="..." />
                                                    </div>
                                                    <div className="col col-lg-8 text-center text-white ">
                                                        <div className="card-body align-middle pt-4">
                                                            <h2 className="card-title">{value.TEN_BAI}</h2>
                                                            <p className="card-text">{value.ID}. {value.TEN_BAI_VIETSUB}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </Link>
                            </>
                        );
                    } else {
                        return null;
                    }
                })}
            </div >
        );
    }
}

export default ListToiec;
