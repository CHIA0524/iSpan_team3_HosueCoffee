const openSideNav = document.querySelector('.openSideNav');
    const navFirst = document.querySelector('.navFirst');
    const sideDark = document.querySelector('.sideDark');
    const closeSideNav = document.querySelector('.closeSideNav');
    
    const openMemberDetail = document.querySelector('.openMemberDetail');
    const memberDetail = document.querySelector('.memberDetail');

    sideDark.addEventListener('click', ()=>{
      navFirst.style.left = '-260px';
      sideDark.style.display = 'none';
      memberDetail.style.display = 'none';
    })
    closeSideNav.addEventListener('click', ()=>{
      navFirst.style.left = '-260px';
      sideDark.style.display = 'none';
      memberDetail.style.display = 'none';
    })

    openSideNav.addEventListener('click', ()=>{
      navFirst.style.left = '0px';
      sideDark.style.display = 'block';
    });
    openMemberDetail.addEventListener('click', ()=>{
      if(memberDetail.style.display=='flex'){
        memberDetail.style.display = 'none';
      }
      else if(memberDetail.style.display=='none'){
        memberDetail.style.display = 'flex';
        memberDetail.style.height = 'auto';
      }
    })