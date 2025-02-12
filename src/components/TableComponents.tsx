import React, { useState } from "react";
import { Table, Form, Row, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const jsonData = {
  WelfareHome: [
    {
      beneficiary: "Angsana",
      amount: 1159585.6,
      finYear: 2024,
      fundingType: "Quarterly 90% Disbursements",
      block : "Per Cap",
      quater: "Q2",
    },
    {
      beneficiary: "Banyan",
      amount: 955625.0,
      finYear: 2024,
      fundingType: "Quarterly 90% Disbursements",
      block : "Per Cap",
      quater: "Q2",
    },
  ],
  ChildrenHome: [
    {
      beneficiary: "Boys Town",
      amount: 4170.69,
      finYear: 2024,
      fundingType: "Quarterly 97% Disbursements",
      block : "Per Cap",
      quater: "Tier 1 - Statutory Rate",
    },
    {
      beneficiary: "Chen Su Lan Methodist Children",
      amount: 4170.69,
      finYear: 2023,
      fundingType: "Quarterly 97% Disbursements",
      block : "Per Cap",
      quater: "Tier 1 - Statutory Rate",
    },
  ],
  AnchorOperatorProg: [
    {
      beneficiary: "Infant Care",
      amount: 4170.69,
      finYear: 2024,
      fundingType: "Monthly Operating Grant",
      block : "Per Cap",
      quater: "Monthly",
    },
    {
      beneficiary: "Child Care",
      amount: 4170.69,
      finYear: 2023,
      fundingType: "Pre-operating Grant",
      block : "Fixed",
      quater: "Period of 4 Month",
    },
    {
      beneficiary: "Infant Care Half Day AM",
      amount: 4170.69,
      finYear: 2023,
      fundingType: "HQ Grant",
      block : "Reimbursement",
      quater: "Monthly",
    },
    {
      beneficiary: "Child Care Half Day PM",
      amount: 4170.69,
      finYear: 2023,
      fundingType: "Monthly MTL Grant",
      block : "Per Cap",
      quater: "Monthly",
    },
  ],
};

const mergedData = [
  ...jsonData.WelfareHome.map((item) => ({ ...item, category: "WelfareHome" })),
  ...jsonData.ChildrenHome.map((item) => ({ ...item, category: "ChildrenHome" })),
  ...jsonData.AnchorOperatorProg.map((item) => ({ ...item, category: "AnchorOperatorProg" })),
];
console.log("Merged Data:", mergedData);

const TableComponent = () => {

  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/details/${id}`);
  };

  const [filteredData, setFilteredData] = useState(mergedData);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState("");
  const [selectedFinYear, setSelectedFinYear] = useState("");
  const [selectedBlock, setSelectedBlock] = useState("");

  console.log("Filtered Data:", filteredData);
  console.log("Selected Beneficiary:", selectedBeneficiary);
  console.log("Selected Financial Year:", selectedFinYear);
  console.log("Selected Block:", selectedBlock);

  const uniqueBeneficiaries = [
    ...new Set(mergedData.map((item) => item.beneficiary)),
  ];

  console.log("Unique Beneficiaries:", uniqueBeneficiaries);

  const uniqueFinYears = [...new Set(mergedData.map((item) => item.finYear))];

  console.log("Unique finyears:", uniqueFinYears);

  const uniqueBlock = [...new Set(mergedData.map((item) => item.block))];

  console.log("Unique block:", uniqueBlock);


  const handleFilterChange = (e) => {
    const selected = e.target.value;
    setSelectedBeneficiary(selected);
    applyFilters(selected, selectedFinYear);
  };

  const handleFinYearChange = (e) => {
    const selectedYear = e.target.value;
    setSelectedFinYear(selectedYear);
    applyFilters(selectedBeneficiary, selectedYear);
  };

  const handleBlockChange = (e) => {
    const selectedBlock = e.target.value;
    setSelectedBlock(selectedBlock);
    applyFilters(selectedBlock, selectedBlock);
  };

  const applyFilters = (beneficiary, finYear, block) => {

    let filtered = mergedData;

    if (beneficiary) {
      filtered = filtered.filter((item) => item.beneficiary === beneficiary);
    }

    if (finYear) {
      filtered = filtered.filter((item) => item.finYear.toString() === finYear);
    }

    if (block) {
      filtered = filtered.filter((item) => item.block === block);
    }

    setFilteredData(filtered);
   
  };

  return (
    <div className="container">
      <Row>
      <Col> 
      <Form.Group className="mb-3">
        <Form.Label><b>Filter by Beneficiary:</b></Form.Label>
        <Form.Select onChange={handleFilterChange} value={selectedBeneficiary}>
          <option value="">All</option>
          {uniqueBeneficiaries.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      </Col>

      <Col> 
      <Form.Group className="mb-3">
        <Form.Label><b>Filter by Financial Year:</b></Form.Label>
        <Form.Select onChange={handleFinYearChange} value={selectedFinYear}>
          <option value="">All</option>
          {uniqueFinYears.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      </Col>

      <Col> 
      <Form.Group className="mb-3">
        <Form.Label><b>Filter by Financial Block:</b></Form.Label>
        <Form.Select onChange={handleBlockChange} value={selectedBlock}>
          <option value="">All</option>
          {uniqueBlock.map((block, index) => (
            <option key={index} value={block}>
              {block}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      </Col>

      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Beneficiary</th>
            <th>Amount(SGD)</th>
            <th>Financial Year</th>
            <th>Funding Type</th>
            <th>Quarter</th>
            <th>Category</th>
            <th>Block</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index} className="cursor-pointer hover:bg-gray-100"
              onClick={() => handleRowClick(item.beneficiary)}> 
                <td>{item.beneficiary}</td>
                <td>{item.amount.toLocaleString()}</td>
                <td>{item.finYear}</td>
                <td>{item.fundingType}</td>
                <td>{item.quater}</td>
                <td>{item.category}</td>
                <td>{item.block}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td  colSpan="7" className="text-center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
