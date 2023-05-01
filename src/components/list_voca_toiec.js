import React from 'react';
import ReduxListVocaToeic from '../redux/Redux_vocaListToeic';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../styles/list_toeic.css"
function ListVocaToeic(props) {
    const { key, ID } = useParams();
    const [list, setList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await ReduxListVocaToeic(key, ID);
            setList(result);
        }
        fetchData();
    }, [key, ID]);
    //console.log("list", key, ID);
    return (
        < div >
            {
                Object.entries(list).map(([key, value]) => {
                    return (
                        <div className=" d-lg-flex text-center mt-3 button-list" key={key}>
                            <div className="col-4 ">
                                <div className="d-flex justify-content-center ">
                                    <button onClick={() => props.handleShowDetailedVoca(value.VOCA, value.VIET_SUB, value.LINK_IMG)} data-bs-toggle="modal" data-bs-target="#exampleModalToggle" type="button" className="btn-img fw-bold pt-0 pb-0 ">
                                        <p id={value.id} value={value.VOCA}>{value.VOCA}</p>
                                    </button>
                                    <p className="ms-3">{value.WT}</p>
                                </div>
                            </div>
                            <div className="col-4 ">
                                <p className="d-flex justify-content-center " id="InterPhonetic">{value.IPA}
                                    <a target="_blank" rel="noreferrer" title="Nghe phát âm tại google"
                                        href={`https://www.google.com/search?q=how+to+pronounce+${value.VOCA}`}
                                        className="ms-3 text-secondary
                    fw-bold"
                                        id="exceptional"><i className="material-icons">volume_up</i></a>
                                </p>
                            </div>
                            <div className="col-4 ">
                                <p className="viet-sub" id={value.id} value={value.VIET_SUB}>{value.VIET_SUB}</p>
                            </div>
                        </div>


                    )
                })
            }
        </div >
    );
}

export default ListVocaToeic;
