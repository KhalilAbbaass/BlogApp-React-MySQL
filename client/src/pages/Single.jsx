import React from 'react';
import { Link } from 'react-router-dom';
import Delete from '../Assets/delete.jpg';
import Edit from '../Assets/edit.jpg';

const Single = () => {
  return (
    <div className='single'>

      <div className='content'>
        <img src='https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
         <div className="user">
          <img alt='' src='https://static.ffx.io/images/$zoom_2.3309%2C$multiply_0.5855%2C$ratio_1%2C$width_1059%2C$x_678%2C$y_162/t_crop_custom/q_86%2Cf_auto/89dcd9ed59d16f7c77f001daa35c38e30b16c8dc'/>
          <div className="info">
              <span>Andrew</span>
              <p>Posted 2 days ago</p>
          </div> 
          <div className="edit">
            <Link to='/write?edit=2'><img src={Edit} alt=''/></Link>
            
            <img src={Delete} alt=''/>
          </div>
        </div>
          <h1>This is a title</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, nihil labore. Optio labore illum saepe nulla magnam earum modi laboriosam ducimus similique, rem aspernatur, quo, deserunt nobis iusto eos unde. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, culpa sequi magni voluptate reprehenderit aperiam cum repellat quisquam vel saepe aut commodi qui nostrum deserunt a blanditiis nesciunt tenetur ut!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis tenetur saepe cupiditate nulla ex praesentium aliquid non aut placeat autem fugiat, nobis totam iure laudantium suscipit soluta? Explicabo, odio!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quibusdam iure cumque dignissimos veritatis atque, voluptates aut maiores aspernatur perspiciatis temporibus deleniti laboriosam, architecto sed ex eum neque? Odit, tempora.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, nihil labore. Optio labore illum saepe nulla magnam earum modi laboriosam ducimus similique, rem aspernatur, quo, deserunt nobis iusto eos unde. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, culpa sequi magni voluptate reprehenderit aperiam cum repellat quisquam vel saepe aut commodi qui nostrum deserunt a blanditiis nesciunt tenetur ut!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis tenetur saepe cupiditate nulla ex praesentium aliquid non aut placeat autem fugiat, nobis totam iure laudantium suscipit soluta? Explicabo, odio!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quibusdam iure cumque dignissimos veritatis atque, voluptates aut maiores aspernatur perspiciatis temporibus deleniti laboriosam, architecto sed ex eum neque? Odit, tempora.
          </p>
      </div>
      <div className='menu'>
        Menu
      </div>

    </div>
  )
}

export default Single