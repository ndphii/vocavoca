import React from 'react';
import ReduxToeic from '../redux/Redux_toeic';

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
                <ul>
                    {objectEntries.map(([key, value]) => { // sử dụng destructuring để truy cập key và value
                        if (key.startsWith("B")) { // chỉ hiển thị các entry có key bắt đầu bằng "B"
                            return (
                                <li key={value.ID}>{value.ID} - {value.TEN_BAI}</li>
                            );
                        } else {
                            return null;
                        }
                    })}
                </ul>
            </div>
        );
    }
}

export default ListToiec;
