/*
 * ******************************************************************************
 * Copyright (c) 2017 Red Hat, Inc. and others
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Red Hat Inc. - initial API and implementation
 *
 * ******************************************************************************
 */
var config =
{
    // hostname/port/name/password for Kapua broker
    BROKER_WEBSOCKET_HOSTNAME: process.env.BROKER_WS_NAME + '-' + process.env.OPENSHIFT_BUILD_NAMESPACE,
    BROKER_WEBSOCKET_PORT: process.env.BROKER_WEBSOCKET_PORT || 80,
    BROKER_USERNAME: process.env.BROKER_USERNAME || "demo_username",
    BROKER_PASSWORD: process.env.BROKER_PASSWORD || "demo_password",

    ES_HOSTNAME: (process.env.ES_NAME || 'search') + '-' + process.env.OPENSHIFT_BUILD_NAMESPACE,
    ES_PORT: process.env.ES_PORT || 80,

    // hostname/port for DG proxy (no username/password required for demo)
    DATASTORE_REST_HOSTNAME: process.env.DATASTORE_PROXY_SERVICE + '-' + process.env.OPENSHIFT_BUILD_NAMESPACE,
    DATASTORE_REST_PORT: process.env.DATASTORE_REST_PORT || 80,

    // Google API Key (can be blank, resulting in throttling for high usage)
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY || "",

    STATIC_TELEMETRY_GRAPHS: process.env.STATIC_TELEMETRY_GRAPHS || 'Humidity,Pressure',
    DASHBOARD_WEB_TITLE: process.env.DASHBOARD_WEB_TITLE || ''
};

module.exports = config;
