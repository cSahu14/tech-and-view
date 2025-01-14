import { Button, Input } from "antd"
import type { GetProps } from 'antd';

type Props = {}

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Navbar = (props: Props) => {
    
  return (
    <nav className="border-b">
        <div className="max-w-7xl flex justify-between items-center mx-auto py-4">
            <section className="flex gap-3">
                <div>
                    TechnView
                </div>
                <div>
                    <Search placeholder="input search text" allowClear onSearch={onSearch} enterButton />
                </div>
            </section>
            <div></div>
        </div>
    </nav>
  )
}

export default Navbar