# PulsePoint_Backend

A RESTful API built with Node.js, Express, and PostgreSQL, using Supabase as the database platform. The platform connects hospitals in need of blood donations with eligible donors, featuring role-based access control, automated matching logic, and request outcome tracking.

---

## 🎯 Core Objectives

* **Reduce time-to-donor:** Enable hospitals to quickly find eligible donors during a shortage

* **Simplify Blood Requests:** Provide hospitals with a structured workflow to create, publish, and manage blood requests.

* **Improve Donor Targeting:** Filter and match donors based on blood type compatibility, location, and availability.

* **Increase Donor Responsiveness:** Notify eligible donors of matching requests and let them respond in a few taps.

* **Build Trust & Accountability:** Give hospitals visibility into who responded and the outcome of every request.


---

## 🏗 System Architecture & Database Schema

The database separates authentication and account identity from role-specific information. A central `User` model manages authentication and role assignment, while `Donor` and `Hospital` store information specific to each account type.

### Tables & Relationships

* **`User`**

  * `id` (PK, UUID)
  * `email` (VARCHAR, Unique)
  * `passwordHash` (VARCHAR)
  * `role` (ENUM: `'DONOR'`, `'HOSPITAL'`, `'ADMIN'`)
  * `createdAt`, `updatedAt` (TIMESTAMPTZ)

* **`Donor`**

  * `id` (PK, UUID)
  * `userId` (FK → `User.id`, Unique)
  * `fullName` (VARCHAR)
  * `bloodType` (ENUM: `A_POSITIVE`, `A_NEGATIVE`, `B_POSITIVE`, `B_NEGATIVE`, `AB_POSITIVE`, `AB_NEGATIVE`, `O_POSITIVE`, `O_NEGATIVE`)
  * `dateOfBirth` (DATE)
  * `phoneNumber` (VARCHAR)
  * `address` (TEXT)
  * `state` (VARCHAR)
  * `isAvailable` (BOOLEAN)
  * `createdAt`, `updatedAt` (TIMESTAMPTZ)

* **`Hospital`**

  * `id` (PK, UUID)
  * `userId` (FK → `User.id`, Unique)
  * `hospitalName` (VARCHAR)
  * `licenseId` (INT)
  * `phoneNumber` (VARCHAR)
  * `address` (TEXT)
  * `state` (VARCHAR)
  * `contactName` (VARCHAR)
  * `contactPhone` (VARCHAR)
  * `contactRole` (VARCHAR)

  * `createdAt`, `updatedAt` (TIMESTAMPTZ)

* **`BloodRequest`**

  * `id` (PK, UUID)
  * `hospitalId` (FK → `Hospital.id`)
  * `bloodType` (ENUM: `A_POSITIVE`, `A_NEGATIVE`, `B_POSITIVE`, `B_NEGATIVE`, `AB_POSITIVE`, `AB_NEGATIVE`, `O_POSITIVE`, `O_NEGATIVE`)
  * `units` (INTEGER)
  * `urgencyLevel` (ENUM: `'CRITICAL'`, `'URGENT'`, `'ROUTINE'`)
  * `status` (ENUM: `'OPEN'`, `'PARTIALLY_FULFILLED'`, `'COMPLETED'`, `'CANCELLED'`)
  * `notes` (TEXT)
  * `createdAt`, `updatedAt` (TIMESTAMPTZ)

* **`RequestResponse`**

  * `id` (PK, UUID)
  * `requestId` (FK → `BloodRequest.id`)
  * `donorId` (FK → `Donor.id`)
  * `status` (ENUM: `'ACCEPTED'`, `'DECLINED'`, `'WITHDRAWN'`)
  * `createdAt`, `updatedAt` (TIMESTAMPTZ)
  * **Constraint:** Unique `(requestId, donorId)` to prevent duplicate responses.

* **`Donation`**

  * `id` (PK, UUID)
  * `requestId` (FK → `BloodRequest.id`)
  * `donorId` (FK → `Donor.id`)
  * `responseId` (FK → `RequestResponse.id`, Unique)
  * `units` (INTEGER)
  * `confirmedBy` (FK → `User.id`)
  * `confirmedAt` (TIMESTAMPTZ)
  * `createdAt` (TIMESTAMPTZ)

### Relationships

```text
User
├── Donor
└── Hospital

Hospital
└── BloodRequest
    └── RequestResponse
        └── Donor

BloodRequest
└── Donation
    ├── Donor
    └── RequestResponse
```

A donor or hospital registration creates a `User` record and its corresponding role-specific record in a single transaction. This keeps authentication data centralized while allowing donor and hospital information to remain specific to each role.

---

## 🔒 API Endpoints & Role-Based Access Control (RBAC)

| Route | Method | Access Level | Description |
| :--- | :--- | :--- | :--- |
| `/api/auth/register/donor` | `POST` | Public | Register a donor account |
| `/api/auth/register/hospital` | `POST` | Public | Register a hospital account |
| `/api/auth/login` | `POST` | Public | Authenticate user & issue a JWT token |
| `/api/donors/me` | `PATCH` | `DONOR` | Update donor details (fullName, blood type, phone, address, state) |
| `/api/hospitals/profile` | `PATCH` | `DONOR` | Update donor details (phone, address) |
| `/api/requests` | `POST` | `HOSPITAL` | Create a new blood request |
| `/api/requests/:id/update` | `PATCH` | `HOSPITAL` | Update blood request |
| `/api/requests` | `GET` | `DONOR`, `HOSPITAL` |  HOSPITAL own requests |
| `/api/requests/mymatch` | `GET` | `DONOR` |  compatible open requests |
| `/api/requests/:id/respond` | `POST` | `DONOR` | Respond to a request (`ACCEPTED` / `DECLINED`) |
| `/api/requests/:id/response` | `PATCH` | `DONOR` | Update response state (`WITHDRAWN`) |
| `/api/requests/:id/responses/:responseId/complete` | `PATCH` | `HOSPITAL` | Confirm donation completion |
| `/api/donors/me/donations` | `GET` | `DONOR` | View authenticated donor's confirmed donation history |


---

## 🛠 Local Setup & Development

### Prerequisites
* Node.js (v18+ recommended)
* npm 
* Supabase PostgreSQL database

### Environment Variables
Create a `.env` file in the root directory:
```env
PORT=5000
DATABASE_URL="***"
FRONTEND_URL="***"
JWT_SECRET="***"