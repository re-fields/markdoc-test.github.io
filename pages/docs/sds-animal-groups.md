---
title: SDS-Animal-Group
description: Informações e regras sobre o cadastro de lotes no SDS
cover: /images/fazenda.jpg
---

## SDS Granjas2

Aqui teremos as informações sobre o cadastro

Vamos lá explorar:

- **Holding**:
  Acabou a criatividade para explorar texto
- **Granja**:
  Acabou a criatividade para explorar texto
- **Ambiente**:
  Iremos utilizar o ambiente de dev para os primeiros testes: https://sds-backend.agriness-dev.com/

### Eventos

Esse é o primeiro evento...

```bash 
curl --location 'https://sds-backend.agriness-dev.com/api/events' \
--header 'Content-Type: application/json' \
--data '{
    "source_id": "sds_backend_swagger",
    "source_version": "1.0.0",
    "source_user": "fields",
    "type": "farm_register",
    "version": "2.0",
    "data": {
        "external_id": "1",
        "farm_holdings": [
            {
                "holding_uuid": "aa03455f-9172-4dea-88fe-f2af435c861e",
                "account_uuid": "91957d91-5957-433a-95d2-ac5c0be0dcda",
                "regions": [
                    "f98d58b3-2b0e-49b0-85b5-b4afe163e1b6"
                ],
                "producers": [
                    "8a92f040-93c7-4ffa-9fc1-f9dd36f5baba"
                ],
                "technicians": [
                    "62f2fb3d-5c59-438a-96bb-c858e651f570"
                ],
                "is_holder": true
            }
        ],
        "name": "Poultry Farm",
        "city": "Campinas",
        "latitude": -22.932924,
        "longitude": -47.073845,
        "is_verticalized": false,
        "currency_unit": "brl",
        "measurement_unit": "kg",
        "status": "active",
        "production_type": "commercial",
        "production_system": "pullets",
        "production_stages": [
            "pullets"
        ]
    }
}' 
```
Esse é o segundo evento, o de update...

```bash 
curl --location 'https://sds-backend.agriness-dev.com/api/events' \
--header 'Content-Type: application/json' \
--data '{
  "source_id": "sds_backend_swagger",
  "source_version": "1.0.0",
  "source_user": "fields",
  "type": "farm_update",
  "version": "2.0",
  "data": {
    "external_id": "1",
    "uuid": "f334606c-a588-49d5-8d6b-5c09def5a069",
    "farm_holdings": [
      {
        "holding_uuid": "aa03455f-9172-4dea-88fe-f2af435c861e",
        "account_uuid": "91957d91-5957-433a-95d2-ac5c0be0dcda",
        "regions": [
          "f98d58b3-2b0e-49b0-85b5-b4afe163e1b6"
        ],
        "producers": [
          "8a92f040-93c7-4ffa-9fc1-f9dd36f5baba"
        ],
        "technicians": [
          "62f2fb3d-5c59-438a-96bb-c858e651f570"
        ],
        "is_holder": true
      }
    ],
    "production_system": "pullets_and_fertile_eggs",
    "production_stages": [
      "pullets",
      "fertile_eggs"
    ]
  }
}' 
```

### Informações Importantes

O board do time é [Board](https://agriness-team.atlassian.net/jira/software/projects/SP/boards/208), lá você pode acompanhar e abrir alguma demanda nova.

Temos o canal de sustentação [sds-sustentação](https://agriness.slack.com/archives/C0405BA8XCZ)

{%infobox title="Descriação dos campos" type="info"%}
```bash
	"external_id": str,				# An identifier used by third party services to identify the data (Optional)
		"uuid": str,					# Unique identifier of the farm (Mandatory)
		"farm_holdings": [{ 				# The list of holdings that are associated with the farm (Mandatory) 
			"holding_uuid": str, 			# Unique identifier of the holding (Mandatory)
			"account_uuid": str,			# Unique identifier of the holding's account (Optional)
			"regions": list[str],			# Unique identifiers of the holding's regions (Optional)
			"producers": list[str],			# Unique identifiers of the holding's producers (Optional)
			"technicians": list[str],		# Unique identifiers of the holding's technicians (Optional)
			"is_holder": bool 			# If the holding is the one that originated the farm or not (Mandatory)
		}],
		"name": str,					# Name of the farm (Optional)
		"city": str,					# Code of the city where it is located (Optional)
		"latitude": float, 				# Latitude of the farm's location (Optional)
		"longitude": float, 				# Longitude of the farm's location (Optional)
		"is_verticalized": bool, 			# If the farm is verticalized or not (Mandatory)
		"currency_unit": FarmCurrencyUnit, 		# The farm's currency unit of usage (Optional)
		"measurement_unit": FarmWeightMeasurementUnit, 	# The farm's measurement unit of usage (Optional)
		"status": Status,				# Whether the farm is active or not (Mandatory)
		"production_type": ProductionType,		# Informs additional characteristics of the farm (Optional)
		"production_system": ProductionSystem, 		# Informs the production system regarding species and production stages which are taken care of on the farm (Optional)
		"production_stages": list[ProductionStage]	# Based on the set of species and production stages which are taken care of on the farm (Mandatory)
```
{%/infobox%}
{%infobox title="Dica" type="warning"%}
Não temos dica
{%/infobox%}
{%infobox title="Importante" type="error"%}
Em caso de bugs é necessario abrir demanda em....
{%/infobox%}

> Posso colocar algo aqui
 