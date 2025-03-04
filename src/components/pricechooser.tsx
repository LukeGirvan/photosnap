import React, { useState } from "react";



interface PriceChooseProps{
    basicDesc:string;
    basicMonthlyPrice:number;
    proDesc:string;
    proMonthlyPrice:number;
    businessDesc:string;
    businessMonthlyPrice:number;
}

const PriceChooser:React.FC<PriceChooseProps> = ({basicDesc,basicMonthlyPrice,proDesc,proMonthlyPrice,businessDesc,businessMonthlyPrice})=>{

    const [yearlySelected, setYearlySelected] = useState(false);

    const toggleSwitch = () => {
        setYearlySelected(!yearlySelected);
      };
      
      console.log(yearlySelected)

      const toggleSelected = (e:React.MouseEvent<HTMLElement>) => {
           const basic = document.querySelector('.basic-plan') as HTMLDivElement 
           const pro = document.querySelector('.pro-plan') as HTMLDivElement
           const business = document.querySelector('.business-plan') as HTMLDivElement
           const selected = document.querySelector('.selected') as HTMLDivElement
           if(basic.contains((e.target as HTMLElement)) && !basic.classList.contains('selected')){
            selected.classList.remove('selected')
            basic.classList.toggle('selected')
           }
           if(pro.contains((e.target as HTMLElement)) && !pro.classList.contains('selected')){
            selected.classList.remove('selected')
            pro.classList.toggle('selected')
           }
           if(business.contains((e.target as HTMLElement)) && !business.classList.contains('selected')){
            selected.classList.remove('selected')
            business.classList.toggle('selected')
           }
           
      };




      return (<>
      
      <div className="switch-holder">
        <p className="monthly-text">
            MONTHLY
        </p>
        <div className="switch" onClick={toggleSwitch}>
         <input type="checkbox" name="checkbox-yearly-monthly" checked={yearlySelected} />
        </div>
        <p className="plan-selected">
        ANNUALY
        </p>
      </div>

        <div className="show-prices">
            <div className="basic-plan" onClick={toggleSelected}>
                <div className="eighty-five-width">
                <div className="details">
                    <h2>
                        Basic
                    </h2>
                    <p className="plan-description">
                        {basicDesc}
                    </p>
                    <div className="price-holder">
                    <p className="price">
                   $ {yearlySelected ? (basicMonthlyPrice*10).toFixed(2) : basicMonthlyPrice.toFixed(2)}
                    </p>
                    
                    <p className="plan-selected">
                    {yearlySelected ? `Per Year`:`Per Month`}
                    </p>
                    
                    </div>
                    <button className="button2 full-width">
                        PICK PLAN
                    </button>
                </div>
                </div>
            </div>
            <div className="pro-plan selected" onClick={toggleSelected}>
                <div className="eighty-five-width">
                <div className="details">
                    <h2>
                        Pro
                    </h2>
                    <p className="plan-description">
                        {proDesc}
                    </p>
                    <div className="price-holder">
                    <p className="price">
                   $ {yearlySelected ? (proMonthlyPrice*10).toFixed(2) : proMonthlyPrice.toFixed(2)}
                     </p>
                     <p className="plan-selected">
                        {yearlySelected ? `Per Year`:`Per Month`}
                     </p>
                    </div>
                    <button className="button2 full-width">
                        PICK PLAN
                    </button>
                </div>
                </div>
            </div>
            <div className="business-plan" onClick={toggleSelected}>
                <div className="eighty-five-width">
                <div className="details">
                    <h2>
                        Business
                    </h2>
                    <p className="plan-description">
                        {businessDesc}
                    </p>

               <div className="price-holder">
                <p className="price">
                    $ {yearlySelected ? (businessMonthlyPrice*10).toFixed(2) : businessMonthlyPrice.toFixed(2)}
                    </p>
                    <p className="plan-selected">
                        {yearlySelected ? `Per Year`:`Per Month`}
                     </p>
               </div>

                    <button className="button2 full-width">
                        PICK PLAN
                    </button>
                </div>
                </div>
            </div>
        </div>
      
      
      </>
        

      );
}
export default PriceChooser;