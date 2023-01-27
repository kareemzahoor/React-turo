
import './wall.css'
import { MessageOutlined , SearchOutlined } from '@ant-design/icons';

function FrontWall(){

return(
    <div className='main-wall'>
        {/* <img src={wall} alt="wall" /> */}
        <div className='date-search'>

          <div className='search-div'>
            <p className='header-search-text'>
              Where
            </p>
            <input type={"search"} placeholder={"city, airport,adress or hotel"}></input>
          </div>

          <div className='date-from'>
            <p className='header-search-text'>From</p>
            <input type={"datetime-local"}></input>
          </div>

          <div className='date-until'>
            <p className='header-search-text'>Until</p>
            <input type={"datetime-local"}></input>
          </div>
          <div className='search-icon'>
            <p>
              Search for Cars
            </p>

          <SearchOutlined style={{fontSize : "21px"}}  className='search-icon-logo'/>
          </div>

        </div>

      </div>

)

}
export default FrontWall;