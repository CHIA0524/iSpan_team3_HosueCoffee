import { Link } from 'react-router-dom'

function DrinkOListCard(){
    return(
        <>
            <Link to={'/member/DrinkO'}>
            <div className="listcard row">
                      <div className="col-3 listdata col-3None">
                          <div className="state">已完成</div>
                          <div>訂單編號:283983</div>
                          <div>成立時間:2022/03/26</div>
                      </div>
                      <div className="col-1 col-3None"></div>
                      <div className="col-8 col-wn">
                          <div className="state">已完成</div>
                          <div>訂單編號:283983</div>
                          <div>成立時間:2022/03/26</div>
                      </div>
                      <div className="col-4 col-wn rwdGT ttpiece">&gt;</div>
                      <div className="col row">
                          <div className="col-3">
                              <img className="listimg" src={require('../img/飲品.png')} alt=""></img>
                          </div>
                          <div className="col-3">
                              <img className="listimg" src={require('../img/飲品.png')}  alt=""></img>
                          </div>
                              <div className="col-3">
                                  <img className="listimg" src={require('../img/飲品.png')}  alt=""></img>
                              </div>
                          
                          <div className="col-3 ttpiece col-3None">共?件&gt;</div>
                          <div className="col-3 ttpiece col-wn">共?件</div>
                      </div>
              </div>
                </Link>
        </>
    )
}
export default DrinkOListCard