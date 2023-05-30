import { useState } from "react";
import { dishes, soups, additionals } from "../../helpers/products";
import { Button, Container, Col, Row, Table } from "react-bootstrap";

const Meals = () => {
  const [toggleDishes, setToggleDishes] = useState<boolean>(false);
  const [toggleSoups, setToggleSoups] = useState<boolean>(false);
  const [toggleAdditionals, setToggleAdditionals] = useState<boolean>(false);
  return (
    <Container>
      <Row>
        <Button
          variant="outline-dark"
          className="btn btn-light"
          onClick={() => setToggleDishes(!toggleDishes)}
        >
          Dishes
        </Button>
        {toggleDishes && (
          <Col xs={12} md={12}>
            <Table className="table table-responsive-md w-100">
              <thead>
                <tr>
                  <th>Dishes</th>
                  <th>Price</th>
                </tr>
              </thead>
              {dishes.map((dish) => (
                <>
                  <tbody>
                    <tr>
                      <td>{dish.name}</td>
                      <td>{dish.price}</td>
                    </tr>
                  </tbody>
                </>
              ))}
            </Table>
          </Col>
        )}
      </Row>
      <Row>
        <Button
          variant="outline-dark"
          className="btn btn-light"
          onClick={() => setToggleSoups(!toggleSoups)}
        >
          Soups
        </Button>
        {toggleSoups && (
          <Col xs={12} md={12}>
            <Table className="table table-responsive-md w-100">
              <thead>
                <tr>
                  <th>Soups</th>
                  <th>Price</th>
                </tr>
              </thead>
              {soups.map((soup) => (
                <>
                  <tbody>
                    <tr>
                      <td>{soup.name}</td>
                      <td>{soup.price}</td>
                    </tr>
                  </tbody>
                </>
              ))}
            </Table>
          </Col>
        )}
      </Row>
      <Row>
        <Button
          variant="outline-dark"
          className="btn btn-light"
          onClick={() => setToggleAdditionals(!toggleAdditionals)}
        >
          Additionals
        </Button>
        {toggleAdditionals && (
          <Col xs={12} md={12}>
            <Table className="table table-responsive-md w-100">
              <thead>
                <tr>
                  <th>Additionals</th>
                  <th>Price</th>
                </tr>
              </thead>
              {additionals.map((addition) => (
                <>
                  <tbody>
                    <tr>
                      <td>{addition.name}</td>
                      <td>{addition.price}</td>
                    </tr>
                  </tbody>
                </>
              ))}
            </Table>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Meals;
