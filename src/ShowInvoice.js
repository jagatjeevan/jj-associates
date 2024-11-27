const ShowInvoice = (props) => {
  const { rowData, month } = props;

  return (
    <main>
      <header>
        <small>Form No. XI (Rule 26(2))</small>
        <strong>M/s J.J. Associates</strong>
        <div>Wages slip (Minimum Wages act)</div>
      </header>

      <article>
        <div className="wages-month-details">
          <div>
            Wages for the month : <strong>{month}</strong>
          </div>
          <div>TSMIL, Anantput, Cuttack</div>
          <div>FEED</div>
        </div>

        <section>
          <div className="basic">
            <div className="slno">Sl. No. {rowData[0]}</div>
            <div>
              Name of the employee <strong>{rowData[1]}</strong>
            </div>
            <div>Name of the unit</div>
            <div>Father's / Husband's Name </div>
            <div>UAN </div>
            <div>
              Designation <strong>{rowData[2]}</strong>
            </div>
            <div>ESI No.</div>
          </div>

          <div className="pay">
            <div>
              Wages per day <strong>{rowData[3]}</strong>
            </div>
            <div>Duty</div>
            <div>PF, ESI</div>
            <div>Basic</div>
            <div>M.Off</div>
            <div>M.Off Amt</div>
            <div>Holiday</div>
            <div>Allowance</div>
            <div>Dust</div>
            <div>Edu</div>
            <div>Net Payment</div>
            <div>
              OT<strong>{rowData[9]}</strong>
            </div>
            <div>OT Amt.</div>
            <div>
              Extra <strong>{rowData[10]}</strong>
            </div>
            <div>PF</div>
            <div>ESI</div>
            <div className="net-payment">
              Net Payment : <strong>{rowData[11]}</strong>
            </div>
          </div>
        </section>
      </article>
      <footer>
        <div className="emp-sign">Employee's Signature</div>
        <div className="jj-sign">
          M/s JJ Associates
          <br />
        </div>
      </footer>
    </main>
  );
};

const ShowData = (props) => {
  if (!props.rows.length) return null;

  return props.rows.map((row, index) => (
    <ShowInvoice rowData={row} month={props.month} key={index} />
  ));
};

export default ShowData;
