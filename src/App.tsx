import PocketBase, { ListResult, RecordModel } from 'pocketbase'
import './App.css'
import { useEffect, useState } from 'react'
import { Car } from './types/Car'
import { adminAuth } from './auth/adminAuth'

const pb: PocketBase = new PocketBase('https://pocketbase-prod-production.up.railway.app')
pb.autoCancellation(false)

export function App() {
  const [carItems, setCarItems] = useState<Car[]>([])

  useEffect(() => {
    async function getCarItems(): Promise<void> {
      await adminAuth(pb)
      const resultList: ListResult<RecordModel> = await pb.collection('cars').getList(1, 20, {})
      setCarItems(resultList.items as Car[])
    }

    getCarItems()
  }, [carItems])


  return (
    <div className="App">
      <header>
        car ads
      </header>

      <div>
        {carItems.map(({ id, make, price }) => (
          <div key={id}>
            {make}: ${price.toString()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App