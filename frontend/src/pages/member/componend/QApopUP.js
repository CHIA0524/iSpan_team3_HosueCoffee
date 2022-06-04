
function QApopUP(props){
  const {css,setcss}=props
    return(
        <>
           <div class="QApopupWrap" id="QApopupWrap" style={css}>
            <div class="QApopupBox">
            <form name="ansAddForm" class="ansAddForm d-flex flex-column text-start" method="post" novalidate onsubmit="checkNewForm(); return false;">
            <a class="QApopupClose text-center" href="#"><i class="fa-solid fa-xmark"></i></a>
             <input type="text" name="" id="" placeholder="主旨"></input>
            <select name="" id="">
                <option value="" disabled selected>類型</option>
                <option value="">商品相關</option>
                <option value="">付款相關</option>
                <option value="">其他</option>
            </select>
            <textarea name="" id="" cols="30" rows="10"></textarea>
                <div class="text-center">
            <button type="submit" class="coffeeLightBtn">送出</button>
          </div>
        </form>
      </div>
    </div>
        </>
    )
}
export default QApopUP