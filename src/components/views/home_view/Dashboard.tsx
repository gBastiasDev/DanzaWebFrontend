import React, { useEffect, useState } from "react";
import donationService from "../../../services/donationService";
import "./Dashboard.css";



const DashboardView: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const data = await donationService.getDonations();
        setDonations(data);

        const totalAmount = data.reduce((sum: number, d: Donation) => sum + d.amount, 0);
        setTotal(totalAmount);
      } catch (error) {
        console.error("Error al obtener donaciones", error);
      }
    };

    fetchDonations();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Listado de Donaciones</h1>
      <div className="total-box">
        <strong>Total Recaudado Por Donaciones: </strong> ${total.toLocaleString("es-CL")}
      </div>

      <table className="donations-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Método</th>
            <th>Comprobante</th>
          </tr>
        </thead>
        {donations.length > 0 ? <tbody>
          {donations.map((donation) => (
            <tr key={donation._id}>
              <td>{donation.name}</td>
              <td>{donation.email}</td>
              <td>${donation.amount.toLocaleString("es-CL")}</td>
              <td>{new Date(donation.donation_date).toLocaleDateString("es-CL")}</td>
              <td>{donation.state}</td>
              <td>{donation.method}</td>
              <td>{donation.photo}</td>
            </tr>
          ))}
        </tbody> : (
          <tbody>
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                No hay donaciones registradas.
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default DashboardView;
