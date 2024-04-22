/*
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package com.apitable.interfaces.billing;

import com.apitable.interfaces.billing.facade.DefaultEntitlementServiceFacadeImpl;
import com.apitable.interfaces.billing.facade.EntitlementServiceFacade;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * billing context config.
 */
@Configuration(proxyBeanMethods = false)
public class BillingContextConfig {

    @Bean
    @ConditionalOnMissingBean
    public EntitlementServiceFacade defaultEntitlementServiceFacade() {
        return new DefaultEntitlementServiceFacadeImpl();
    }
}
