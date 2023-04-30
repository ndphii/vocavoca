import { getDatabase, ref, child, get } from "firebase/database";

async function ReduxToeic() {
    const dbRef = ref(getDatabase());
    try {
        const snapshot = await get(child(dbRef, `DM_KH/K1`));
        if (snapshot.exists()) {
            //console.log(snapshot.val());
            const list = snapshot.val();
            return list;
        } else {
            console.log("No data available");
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}


export default ReduxToeic;