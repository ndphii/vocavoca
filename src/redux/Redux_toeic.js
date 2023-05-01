import { getDatabase, ref, child, get } from "firebase/database";
async function ReduxToeic() {
    const dbRef = ref(getDatabase());
    try {
        const snapshot = await get(child(dbRef, `DM_KH/K1`));
        if (snapshot.exists()) {
            const list = snapshot.val();
            return list;
        } else {
            const noData = { message: "Tạm Thời Khoá Học Này Chưa Được Cập Nhật" };
            return noData;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default ReduxToeic;