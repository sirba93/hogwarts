import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from "../store"
import { House, initialiseHouses, selectHouses } from "../store/houses"

const useFetchHouses = (): [boolean, House[],  () => void] => {
    const dispatch = useDispatch<AppDispatch>()

    const { loading, items } = useSelector(selectHouses)

    async function loadHouses() {
        await dispatch(initialiseHouses())
    }

    return [loading, items, loadHouses]
}

export default useFetchHouses