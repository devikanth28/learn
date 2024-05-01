import React, { useState } from 'react';
import { Nav, TabContent, TabPane } from 'reactstrap';
import NavTabs from './NavTabs';

const TabContentChange = () => {
  const [tabId, setTabId] = useState('1');
  const [selectedPlan, setSelectedPlan] = useState('subscriptionPlan');
    const [inputValue, setInputValue] = useState("");
  const handleTabId = (tabId) => {
    setTabId(tabId.toString());
  };

  const tabs = ["Home Delivery", "Store Pick Up"];
  const plans = ["subscriptionPlan", "indivdualplan", "multiplan"];

  const handleChangePlan = (e) => {
    setSelectedPlan(e.target.value);
  };

  const handleInputChange = (e) =>{
    setInputValue(e.target.value);
  }

  console.log("selectedPlan", selectedPlan);



  return (
    <div>
      <NavTabs tabs={tabs} onTabChange={handleTabId} />
      <TabContent activeTab={tabId}>
        <TabPane tabId="1">
          <div className="p-12 col-9">
            Home Delivery
          </div>
        </TabPane>
        <TabPane tabId="2">
          <div className="d-lg-flex gap-lg-5 mb-3">
            {plans.map((each, index) => (
              <div className="form-check form-check-inline eachPlan" key={index}>
                <input
                  type="radio"
                  id={each}
                  className="form-check-input"
                  value={each}
                  name="subscriptionPlan"
                  onChange={handleChangePlan}
                  checked={selectedPlan === each}
                />
                <label htmlFor={each} className="form-check-label">{each}</label>
              </div>
            ))}
          </div>
        <input type="text" value={inputValue} onChange={(e)=>{handleInputChange(e)}}/>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default TabContentChange;
