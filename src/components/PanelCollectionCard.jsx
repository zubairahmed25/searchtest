import React from 'react';

const PanelCollectionCard = () => {
    return (
        <a className="collection-link" href="/">
          <div className="collection-body">
            <div className="collection-media">
            <img
                    src="https://cld.accentuate.io/58857554081/1684237766364/PopularCollections-Hotfix.jpg?v=1694790245168"
                    alt=""
                  />
            </div>
          </div>
          <div className="collection-footer">
            <p className="collection-button">Shop Hotfix</p>
          </div>
        </a>
    );
};

export default PanelCollectionCard;