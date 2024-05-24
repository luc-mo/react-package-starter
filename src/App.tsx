import { Counter } from '@/components/counter'

export const App = () => {
  return (
    <>
      <h1 className='text-3xl font-bold mb-4'>Counter</h1>
      <Counter initialCount={0}/>
    </>
  )
}
