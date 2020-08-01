import React from 'react';
import AlertContext from '../../context/alert/alertContext';
import { useContext } from 'react';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alert.length > 0 &&
    alertContext.alert.map((alert) => {
      return (
        <div key={alert.id} className={`alert alert-${alert.type}`}>
          <i className="fas fa-info-circle" /> {alert.msg}
        </div>
      );
    })
  );
};

export default Alerts;
