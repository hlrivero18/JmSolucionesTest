//COMPONENTES
import Tables from '@/components/Tables/Tables'
import Add from '@/components/Add/Add'
import Search from '@/components/Search/Search'

export default function Home() {
  return (

    <div className='p-5'>
      <Search />
      <Tables />
      <Add />
    </div>
  )
}
